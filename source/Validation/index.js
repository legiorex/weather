export const requiredInput = (input) =>
    input ? undefined : `Требуется ввод`;

export const correctInput = input =>
    input !== 'Юрчик' ? 'Неправильное имя пользователя' : undefined;