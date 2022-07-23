namespace HtmlHelper {
  export const jsonToHtmlDate = (data: any) => {
    const date = new Date(data);
    return `${date.getFullYear()}-${date.getMonth().toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  export const formDataToJson = (id: string) => {
    const formData = new FormData(
      document.querySelector(`#${id}`) as HTMLFormElement,
    );

    const data: any = {};
    formData.forEach((value, key) => { data[key] = value; });

    return data;
  };

}

export default HtmlHelper;
