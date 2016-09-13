import { onQuoteFetch } from './quote';
import { onKeystroke } from './keystroke';

export default function* sagas () {
    yield [
        onQuoteFetch(),
        onKeystroke()
    ];
}
