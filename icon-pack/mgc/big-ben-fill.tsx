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
          d="M12 1a1 1 0 0 1 .993.883L13 2v1.697l1.832 2.748c.042.064.077.132.104.203l.034.11L15.28 8H16a1 1 0 0 1 .993.883L17 9v6a1 1 0 0 1-.883.993L16 16v5a1 1 0 0 1 .117 1.993L16 23H8a1 1 0 0 1-.117-1.993L8 21v-5a1 1 0 0 1-.993-.883L7 15V9a1 1 0 0 1 .883-.993L8 8h.72l.31-1.243a1 1 0 0 1 .08-.213l.058-.099L11 3.697V2a1 1 0 0 1 1-1m0 8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2v-1a1 1 0 0 0-1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BigBenFill'

/**
 * MingCute Icon: Big Ben Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BigBenFill = memo(Icon)
