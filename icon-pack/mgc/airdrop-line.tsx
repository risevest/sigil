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
          d="M12 4a8 8 0 0 0-3.578 15.157 1 1 0 0 1-.896 1.789A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-5.526 8.946 1 1 0 1 1-.896-1.789A8 8 0 0 0 12 4m0 4a4 4 0 0 0-1.789 7.579 1 1 0 0 1-.895 1.788 6 6 0 1 1 5.369 0 1 1 0 0 1-.896-1.788A4 4 0 0 0 12 8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'AirdropLine'

/**
 * MingCute Icon: Airdrop Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AirdropLine = memo(Icon)
