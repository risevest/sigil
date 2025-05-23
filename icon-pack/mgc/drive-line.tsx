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
          d="M14.31 3a2 2 0 0 1 1.644.861l.088.139 5.773 10a2 2 0 0 1 .082 1.842l-.082.158-2.31 4a2 2 0 0 1-1.567.993l-.164.007H6.227a2 2 0 0 1-1.645-.861L4.495 20l-2.31-4a2 2 0 0 1-.082-1.842L2.185 14 7.96 4a2 2 0 0 1 1.568-.993L9.691 3zm5.196 13H9.113l-1.732 3h10.393zM9.114 6l-5.197 9 1.732 3 5.196-9zm5.196-1h-3.464l5.196 9h3.464zM12 11l-1.732 3h3.464z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'DriveLine'

/**
 * MingCute Icon: Drive Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const DriveLine = memo(Icon)
