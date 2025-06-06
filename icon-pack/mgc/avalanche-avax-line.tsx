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
          d="M16.316 12.873a1.5 1.5 0 0 1 2.518-.125l.08.125 3.134 5.428a1.5 1.5 0 0 1-1.168 2.245l-.131.005H14.48a1.5 1.5 0 0 1-1.36-2.133l.061-.117zm-5.5-9.526a1.5 1.5 0 0 1 2.518-.125l.08.125 2.513 4.352a1.5 1.5 0 0 1 .072 1.358l-.072.142L9.806 19.8a1.5 1.5 0 0 1-1.155.743l-.145.007H3.481a1.5 1.5 0 0 1-1.36-2.133l.061-.117zm6.799 11.276-2.268 3.928h4.536zm-5.5-9.526L4.347 18.55h3.87l5.833-10.1z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'AvalancheAvaxLine'

/**
 * MingCute Icon: Avalanche Avax Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AvalancheAvaxLine = memo(Icon)
