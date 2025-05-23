import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_5894)">
        <Path
          d="M15.5 5.14547C16.6 5.14547 17.5 6.04547 17.5 7.14547C17.5 8.13547 16.77 8.96547 15.83 9.11547L13.52 6.80547C13.69 5.86547 14.51 5.14547 15.5 5.14547ZM15.5 3.14547C13.29 3.14547 11.5 4.93547 11.5 7.14547C11.5 7.32547 11.53 7.49547 11.55 7.66547L14.98 11.0955C15.15 11.1155 15.32 11.1455 15.5 11.1455C17.71 11.1455 19.5 9.35547 19.5 7.14547C19.5 4.93547 17.71 3.14547 15.5 3.14547ZM17.19 13.3055L23.03 19.1455H23.5V17.1455C23.5 15.0055 19.94 13.6455 17.19 13.3055ZM13.51 15.2755L15.38 17.1455H9.5C9.58 16.9055 10.38 16.1355 12.41 15.5755L13.51 15.2755ZM1.91 0.855469L0.5 2.26547L4.5 6.26547V9.14547H1.5V11.1455H4.5V14.1455H6.5V11.1455H9.38L11.89 13.6555C9.69 14.2555 7.5 15.4455 7.5 17.1455V19.1455H17.38L21.38 23.1455L22.79 21.7355L1.91 0.855469ZM6.5 9.14547V8.26547L7.38 9.14547H6.5Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_5894">
          <Rect width="24" height="24" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'PersonAddDisabled'

/**
 * Material Icon: Person Add Disabled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:person_add_disabled Material Icon Docs}
 */
export const PersonAddDisabled = memo(Icon)
