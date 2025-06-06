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
          d="M19 2.5a2.5 2.5 0 0 1 2.495 2.336L21.5 5v10a2.5 2.5 0 0 1-2.336 2.495L19 17.5h-1.5V19a2.5 2.5 0 0 1-2.336 2.495L15 21.5H5a2.5 2.5 0 0 1-2.495-2.336L2.5 19V9a2.5 2.5 0 0 1 2.336-2.495L5 6.5h1.5V5a2.5 2.5 0 0 1 2.336-2.495L9 2.5zm-4.5 7h-9v9h9zm4-4h-9v1H15l.164.005a2.5 2.5 0 0 1 2.33 2.33L17.5 9v5.5h1z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'RestoreFill'

/**
 * MingCute Icon: Restore Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RestoreFill = memo(Icon)
