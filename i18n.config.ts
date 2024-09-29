import en from './locales/en.json';
import ja from './locales/ja.json';
import ru from './locales/ru.json';
import zh from './locales/zh.json';

export default defineI18nConfig(() => ({
    messages: {
        en,
        ja,
        ru,
        zh
    }
}));
