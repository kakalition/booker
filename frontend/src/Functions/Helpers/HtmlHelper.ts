namespace HtmlHelper {
  export const jsonToHtmlDate = (data: any) => {
    const date = new Date(data);
    return `${date.getFullYear()}-${date.getMonth().toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

}

export default HtmlHelper;
