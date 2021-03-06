export const regexs = {
  phone: /^\([1-9]{2}\) [0-9]{4}\-[0-9]{4}$/,
  dateFormat:
    /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[/]([0]?[1-9]|[1][0-2])[/]([0-9]{4}|[0-9]{2})$/,
  dateIsoFormat: /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/,
  timeHHMMSS: /^[0-9]{2}\:[0-9]{2}\:[0-9]{2}$/,
  timeHHMM: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
  cnpj: /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}[/][0-9]{4}\-[0-9]{2}$/, // 00.000.000/0000-00
  cpf: /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/, // 000.000.000-00
  alphanumeric: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
}

export const removeHtmlTags = (content: string) => {
  return content.replace(new RegExp('<[^>]*>', 'g'), '')
}
