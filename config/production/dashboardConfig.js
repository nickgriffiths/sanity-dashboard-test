import devConfig from "../development/dashboardConfig"

export default {
  widgets: [
    ...devConfig.widgets,
    {
      name: 'project-info'
    }
  ]
}