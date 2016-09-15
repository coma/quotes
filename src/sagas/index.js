import { onQuoteFetch } from './quote';

export default function* sagas () {
    yield [
        onQuoteFetch()
    ];
}
