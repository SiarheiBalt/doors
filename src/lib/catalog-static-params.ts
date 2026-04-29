import doorViewData from '../helpers/door-view-data.json';

export function getCatalogSerialPaths() {
  const serials = Array.from(new Set(doorViewData.views.map((v) => v.serial)));
  return serials.map((serial) => ({ serial }));
}

export function getCatalogSerialModelPaths() {
  return doorViewData.views.map((v) => ({
    serial: v.serial,
    model: v.model,
  }));
}
