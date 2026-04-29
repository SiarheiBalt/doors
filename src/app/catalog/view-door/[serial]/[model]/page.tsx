import ViewDoorModelClient from './ViewDoorModelClient';
import {getCatalogSerialModelPaths} from '../../../../../lib/catalog-static-params';

export function generateStaticParams() {
    return getCatalogSerialModelPaths();
}

export default function Page() {
    return <ViewDoorModelClient />;
}
