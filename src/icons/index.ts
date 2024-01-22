import SvgIcon from '@/components/SvgIcon/index.vue' // svg component

const registerSvgIcon = (app: any) => {
  app.component('svg-icon', SvgIcon); // 注册全局组件

  const files = import.meta.globEager('./svg/*.svg');
  const modules: any = {};
  const requireAll = (files: any) => {
    for (const key in files) {
      if (Object.prototype.hasOwnProperty.call(files, key)) {
        modules[key.replace(/(\.\/|\.svg)/g, '')] = files[key].default
      }
    }
  };
  requireAll(files);
}

export default registerSvgIcon;