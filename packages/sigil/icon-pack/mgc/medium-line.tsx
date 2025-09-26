import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M8 6a6 6 0 1 1 0 12A6 6 0 0 1 8 6m9 1c1.5 0 2.5 2.239 2.5 5s-1 5-2.5 5-2.5-2.239-2.5-5 1-5 2.5-5m4 .5c.38 0 .712.827.88 2.246l.047.443.019.235.03.494.01.259.012.541L22 12l-.002.282-.012.541-.01.26-.03.493-.02.235-.045.443c-.169 1.42-.5 2.246-.881 2.246-.38 0-.712-.827-.88-2.246l-.047-.443a16.683 16.683 0 0 1-.019-.235l-.03-.494a20.863 20.863 0 0 1-.01-.259l-.012-.541v-.564l.012-.541.01-.26.03-.493.02-.235.045-.443c.169-1.42.5-2.246.881-2.246M8 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m8.956 1.403c-.363.8-.456 1.731-.456 2.597 0 .866.092 1.798.456 2.597.018.038.07.038.088 0 .363-.8.456-1.731.456-2.597 0-.866-.092-1.798-.456-2.597a.048.048 0 0 0-.088 0"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'MediumLine'

/**
 * MingCute Icon: Medium Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MediumLine = memo(Icon)
