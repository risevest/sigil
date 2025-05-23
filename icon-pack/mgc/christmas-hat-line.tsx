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
          d="M12.23 3a7.23 7.23 0 0 1 7.21 6.676l.544 7.073A3 3 0 1 1 15 19l-9 .001a3 3 0 0 1-1-5.83v-2.94A7.23 7.23 0 0 1 12.23 3M18 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2.72-3H6a1 1 0 0 0-.117 1.993L6 17h9.764l.135-.141zM12.23 5a5.23 5.23 0 0 0-5.226 5.015L7 10.23V13h7.613l-.562-1.684a1 1 0 0 1 1.854-.74l.044.108 1.776 5.328.195-.011-.475-6.172A5.23 5.23 0 0 0 12.23 5"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ChristmasHatLine'

/**
 * MingCute Icon: Christmas Hat Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ChristmasHatLine = memo(Icon)
