export const getFirstPathBySideBar = (data: ISideBarData[]): string => {
  for (let i = 0; i < data.length; i++) {
    if (!data[i].children?.length) {
      return data[i].path;
    }
    const childPath = data[i].children?.find(item => item.path)?.path;
    if (childPath) {
      return childPath;
    }


  }
  return "/404";
}