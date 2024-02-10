import _ from 'lodash'

// Auto Registering Global Components
export default {
  install(app) {
    const baseComponents = import.meta.glob('../components/base/*.vue', {
      eager: true
    })
    Object.entries(baseComponents).forEach(([path, module]) => {
      const componentName = _.upperFirst(
        _.camelCase(
          path
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
      )
      // export default
      app.component(`${componentName}`, module.default)
    })
  }
}
