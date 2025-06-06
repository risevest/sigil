import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M16.107 3c.762 0 1.419.45 1.719 1.099l.059.142 2.09.696a1.5 1.5 0 0 1 1.019 1.286L21 6.36v11.28a1.5 1.5 0 0 1-.898 1.373l-.128.05-2.09.696a1.894 1.894 0 0 1-1.615 1.234l-.162.007H6a2 2 0 0 1-1.995-1.85L4 19V5a2 2 0 0 1 1.85-1.995L6 3zM16 5H6v14h10zm2 1.387v11.226l1-.334V6.721zM11 13c.841 0 1.74.137 2.469.461.694.309 1.531.943 1.531 2.039a1 1 0 0 1-2 .015l-.05-.051a1.208 1.208 0 0 0-.294-.175C12.26 15.113 11.66 15 11 15c-.659 0-1.26.113-1.656.289a1.21 1.21 0 0 0-.293.175L9 15.515a1 1 0 0 1-2-.015c0-1.096.837-1.73 1.531-2.039C9.26 13.137 10.16 13 11 13m0-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Contacts3Line'

/**
 * MingCute Icon: Contacts 3 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Contacts3Line = memo(Icon)
