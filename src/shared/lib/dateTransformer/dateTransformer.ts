
export const dateTransformer = (date: string) => {
   let newDate = date.split('T');
   const yearDate = newDate[0].split('-').join('/')
   const time = newDate[1].slice(0,5)
  
   return `${yearDate} ${time}`
  
}