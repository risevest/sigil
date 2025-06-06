import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M19.063 17.829a1.5 1.5 0 0 1 1.989 2.24l-.115.102-1.358 1.087c-1.515 1.212-3.235.774-4.694-.199a.5.5 0 0 0-.59.026 3.622 3.622 0 0 1-4.59 0 .5.5 0 0 0-.59-.026c-1.405.937-3.052 1.378-4.525.327l-.169-.128-1.358-1.087a1.5 1.5 0 0 1 1.75-2.432l.124.09 1.358 1.086a.5.5 0 0 0 .509.07l.08-.044.567-.378c1.332-.888 3.015-.711 4.237.266a.5.5 0 0 0 .624 0c1.17-.935 2.76-1.137 4.061-.376l.176.11.566.378a.5.5 0 0 0 .513.025l.077-.05zM18.5 2.5a4 4 0 0 1 4 4 1.5 1.5 0 0 1-2.993.144L19.5 6.5a1 1 0 0 0-2 0V15c0 .014.02.01.048 0l.094-.046.063-.039 1.358-1.086a1.5 1.5 0 0 1 1.874 2.342l-1.358 1.087a3.5 3.5 0 0 1-4.128.179l-.566-.378a.5.5 0 0 0-.59.026c-1.307 1.045-3.142 1.159-4.481.087-.32-.256-.589-.177-.857-.013l-.161.106-.164.115c-.027.02-.055.038-.083.057a3.5 3.5 0 0 1-4.128-.18l-1.358-1.086a1.5 1.5 0 1 1 1.874-2.342l.563.45V6.5a4 4 0 1 1 8 0 1.5 1.5 0 0 1-2.993.144L10.5 6.5a1 1 0 0 0-2 0v3h6v-3a4 4 0 0 1 4-4m-4 10h-6v1.59c1.139-.3 2.283.015 3.188.74a.5.5 0 0 0 .624 0c.633-.507 1.369-.828 2.188-.853z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SwimmingPoolFill'

/**
 * MingCute Icon: Swimming Pool Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SwimmingPoolFill = memo(Icon)
