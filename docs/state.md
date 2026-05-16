# Состояние приложения (Doors)

Краткое описание слоёв данных и клиентского стора. Цель — не дублировать одно и то же в нескольких местах и не смешивать «серверные» сущности с UI-выбором на витрине.

## Слои

| Слой | Назначение | Источник правды |
|------|------------|-----------------|
| **Маршрут** | Какая серия (`serial`) и модель (`model`) открыты в каталоге | URL: `/catalog/view-door/[serial]`, `.../[serial]/[model]` |
| **Redux** | Копия `serial` / `model` для селекторов и списков; выбранные цвета превью; справочник дверей с витрины; черновик админ-формы | Синхронизация из `useParams()` на страницах витрины; JSON при старте для списка дверей |
| **Серверный кеш и мутации** | Данные и статусы HTTP-запросов (каталог с API, формы и т.д.) | **TanStack Query** — один кеш на сущность, без второго «зеркала» в Redux |

Правило: **каноника для витрины каталога по паре серия + модель — сегменты URL**. Redux обновляется из параметров маршрута, чтобы UI (шапка, селекты, превью) оставался согласованным и при клиентской навигации.

## Redux: что в сторе сейчас

- **`doors`** (`src/lib/features/door.slice.ts`):  
  - `currentSerial`, `currentModel`, производные `models`, `currentDoor`;  
  - выбор превью: `currentDoorColor`, `currentProfileColor`, `currentGlassColor` (ключи полей — тип **`DoorColorFieldKey`** в `src/models/doors.ts`);  
  - `doors` — массив карточек из `door-view-data.json` (до перехода на API).
- **`admin`** (`src/lib/features/admin.slice.ts`): черновик новой карточки (`newDoor`) в форме админки.

Типизированные хуки: `useAppDispatch`, `useAppSelector` в `src/lib/hooks.ts`. Провайдеры: `src/providers/StoreProvider.tsx` и `src/providers/QueryProvider.tsx` (TanStack Query), подключены в корневом `src/app/layout.tsx`.

## Что не класть в Redux при работе через API

Когда данные каталога или другие сущности приходят с бэкенда по HTTP:

- Списки дверей, карточки, справочники и ответы форм держать в **TanStack Query** (запросы, мутации, кеш, загрузка, ошибки).
- В Redux не дублировать те же массивы «вторым глобальным кешом»; там оставить только то, чего нет на сервере или что чисто UI (например, текущее превью цветов до ухода со страницы).

## Статический экспорт

Сборка — **`output: 'export'`**, страницы витрины с `[serial]` / `[model]` генерируются при `next build` (см. `src/lib/catalog-static-params.ts`). Клиентские запросы по HTTP выполняются в браузере после гидрации; **TanStack Query** для этого подходит, отдельный сервер Next.js для API не требуется.

## Связанные файлы

| Область | Путь |
|---------|------|
| Конфигурация стора | `src/lib/store.ts` |
| Витрина: синхронизация из URL | `src/app/catalog/view-door/[serial]/ViewDoorSerialClient.tsx`, `.../[model]/ViewDoorModelClient.tsx` |
| Сброс серии на корне каталога | `src/app/catalog/page.tsx` |
| Слайсы | `src/lib/features/door.slice.ts`, `admin.slice.ts` |
| HTTP + TanStack Query | Например `src/services/contact/useSubmitContactLead.ts` и связанные `submit*.ts` |

Общее описание проекта и стека: [README.md](./README.md).
