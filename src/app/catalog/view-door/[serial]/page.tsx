import ViewDoorSerialClient from './ViewDoorSerialClient';
import {getCatalogSerialPaths} from '../../../../lib/catalog-static-params';

export function generateStaticParams() {
    return getCatalogSerialPaths();
}

export default function Page() {
    return <ViewDoorSerialClient />;
}
