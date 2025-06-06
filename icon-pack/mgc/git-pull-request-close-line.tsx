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
          d="M18 10a1 1 0 0 1 .993.883L19 11v4.17a3.001 3.001 0 1 1-2.172.068L17 15.17V11a1 1 0 0 1 1-1M6 3a3 3 0 0 1 1.172 5.762L7 8.83v6.342a3.001 3.001 0 1 1-2.172.067L5 15.17V8.829A3.001 3.001 0 0 1 6 3m12 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9.172-13.828a1 1 0 0 1 1.32-.084l.094.084L18 4.586l1.414-1.414a1 1 0 0 1 1.498 1.32l-.084.094L19.414 6l1.414 1.414a1 1 0 0 1-1.32 1.498l-.094-.084L18 7.414l-1.414 1.414a1 1 0 0 1-1.498-1.32l.084-.094L16.586 6l-1.414-1.414a1 1 0 0 1 0-1.414M6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'GitPullRequestCloseLine'

/**
 * MingCute Icon: Git Pull Request Close Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const GitPullRequestCloseLine = memo(Icon)
