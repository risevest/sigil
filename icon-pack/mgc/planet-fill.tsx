import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M20.989 12.446a9 9 0 0 1-13.1 7.563 27.86 27.86 0 0 0 2.813-1.129 49.768 49.768 0 0 0 4.048-2.117 49.8 49.8 0 0 0 3.858-2.448 27.897 27.897 0 0 0 2.381-1.869M11.999 3c2.226 0 4.263.808 5.834 2.146l.317-.072.167-.034.346-.064.359-.054c1.275-.167 2.706-.072 3.37 1.078.762 1.32-.058 2.784-.957 3.862l-.225.262-.223.243c-1.394 1.478-3.703 3.201-6.987 5.097-3.284 1.896-5.93 3.034-7.908 3.503l-.159.036-.331.069-.346.06c-1.347.205-2.918.133-3.649-1.132-.663-1.15-.03-2.436.751-3.457l.226-.284.115-.136.227-.258.22-.24A9 9 0 0 1 12 3ZM3.872 15.869l-.154.213c-.165.235-.347.525-.374.788v.128c.14.25.637.252 1.002.225l.304-.03a8.995 8.995 0 0 1-.778-1.325Zm16.785-8.867c-.202-.15-.533-.164-.834-.145l-.285.025c-.044.005-.085.01-.124.013.29.42.545.866.761 1.334l.161-.225c.189-.273.42-.662.357-.922L20.66 7l-.004.002Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'PlanetFill'

/**
 * MingCute Icon: Planet Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const PlanetFill = memo(Icon)
