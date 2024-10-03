import {unref} from 'vue'

export function resolveColor(color?: any, defaultColor?: any) {
    
    if (unref(color)?.hex)
      return unref(color).hex || defaultColor
  
    else if (color?.value)
      return color.value || defaultColor
  
    return defaultColor
  }