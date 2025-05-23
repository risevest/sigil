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
          d="M15 3c.236 0 .454.082.627.22l4.998 4A1 1 0 0 1 20 9h-3.276l.253 1.77 2.972 8.914a1 1 0 1 1-1.898.632l-.626-1.878L12 14.305l-5.425 4.133-.626 1.878a1 1 0 0 1-1.898-.632l2.972-8.915L7.276 9H4a1 1 0 0 1-.625-1.78l4.999-4A.998.998 0 0 1 9 3zm-6.228 8.846-1.074 3.222 2.652-2.02zm6.456 0-1.578 1.202 2.652 2.02zM14.704 9H9.296l-.094.658L12 11.79l2.798-2.132zm-.571-4H9.867l-.285 2h4.836zm-6.48 1.358L6.851 7h.71zm8.694 0L16.44 7h.71z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'HighVoltagePowerLine'

/**
 * MingCute Icon: High Voltage Power Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HighVoltagePowerLine = memo(Icon)
