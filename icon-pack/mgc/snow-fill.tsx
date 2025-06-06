import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M13 3a1 1 0 1 0-2 0v.962l-.654-.346a1 1 0 1 0-.935 1.768l1.589.84v1.902a3.996 3.996 0 0 0-1.854 1.072l-1.648-.952.067-1.796a1 1 0 0 0-1.999-.074l-.027.739-.833-.48a1 1 0 1 0-1 1.731l.833.481-.627.394a1 1 0 0 0 1.064 1.693l1.522-.956 1.647.951a4.003 4.003 0 0 0 0 2.142l-1.647.95-1.522-.955a1 1 0 0 0-1.064 1.693l.627.394-.833.48a1 1 0 1 0 1 1.733l.832-.481.028.74a1 1 0 1 0 1.999-.075l-.067-1.796 1.648-.952A3.991 3.991 0 0 0 11 15.874v1.902l-1.589.84a1 1 0 0 0 .935 1.768l.654-.346V21a1 1 0 1 0 2 0v-.962l.654.346a1 1 0 0 0 .935-1.768L13 17.776v-1.902a3.996 3.996 0 0 0 1.854-1.071l1.648.951-.067 1.796a1 1 0 1 0 1.999.075l.027-.74.833.481a1 1 0 1 0 1-1.732l-.832-.48.626-.394a1 1 0 0 0-1.064-1.694l-1.522.956-1.647-.95a4.004 4.004 0 0 0 0-2.143l1.647-.951 1.522.956a1 1 0 0 0 1.064-1.694l-.627-.393.833-.481a1 1 0 1 0-1-1.732l-.833.48-.027-.739a1 1 0 1 0-1.999.075l.067 1.796-1.648.951A3.996 3.996 0 0 0 13 8.126V6.224l1.589-.84a1 1 0 0 0-.935-1.768L13 3.962z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SnowFill'

/**
 * MingCute Icon: Snow Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SnowFill = memo(Icon)
