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
          d="M7.476 2.43a25.859 25.859 0 0 1 8.956-.016 5.109 5.109 0 0 1 4.163 4.143c.431 2.36.528 4.682.04 7.107-.286 1.428-2.021 2.772-4.026 3.133-1.55.278-6.484.422-8.11.203.438 2 4.634 1.653 5.5 1.5l.235-.043c.572-.105 1.45-.267 1.877-.181.61.123 1.152.553 1.15 1.227-.001.574-.414 1.001-.872 1.286-.35.218-.808.417-1.324.585-1.042.34-2.46.6-4.06.608-3.428.015-6.644-2.263-7.478-5.75-.749-3.133-.743-6.648-.145-9.782a5.03 5.03 0 0 1 4.094-4.02M14 8a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0V9a1 1 0 1 0-2 0v4a1 1 0 1 1-2 0V9a3 3 0 0 1 5-2.236A3 3 0 0 1 17 9v4a1 1 0 1 1-2 0V9a1 1 0 0 0-1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'MastodonFill'

/**
 * MingCute Icon: Mastodon Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MastodonFill = memo(Icon)
