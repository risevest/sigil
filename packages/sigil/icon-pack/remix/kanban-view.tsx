import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const KanbanView = /* @__PURE__ */ memo(function KanbanView(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm1 16V5h16v14zM9 7H7v8h2zm6 0h2v6h-2zm-2 0h-2v10h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Kanban View
 * @see {@link https://remixicon.com/icon/kanban-view Remix Icon Docs}
 */
export { KanbanView }
