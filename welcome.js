import os from 'os'

export function user () {
    return `Привет, юзер. Вижу ты зашел с ${os.type()}`
}
console.log(user())

