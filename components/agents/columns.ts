import type { ColumnDef } from '@tanstack/vue-table'
import type { AgentGetOne } from '~/types'
import { CornerDownRightIcon, VideoIcon } from 'lucide-vue-next'
import { h } from 'vue'
import GenerateAvatar from '../GenerateAvatar.vue'
import { Badge } from '../ui/badge'

export const columns: ColumnDef<AgentGetOne>[] = [
  {
    accessorKey: 'name',
    header: 'Agent Name',
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'flex flex-col gap-y-1' },
        [
          h(
            'div',
            { class: 'flex items-center gap-x-2' },
            [h(
              GenerateAvatar,
              { variant: 'botttsNeutral', seed: row.original.name, class: 'size-6' },
            ), h(
              'span',
              { class: 'font-medium captialize' },
              row.original.name,
            )],
          ),
          h(
            'div',
            { class: 'flex items-center gap-x-2' },
            h(
              'div',
              { class: 'flex items-center gap-x-1' },
              [h(
                CornerDownRightIcon,
                { class: 'size-3 text-muted-foreground' },
              ), h(
                'span',
                { class: 'text-muted-foreground text-sm truncate max-w-[200px] capitalize' },
                row.original.instructions,
              )],
            ),
          ),
        ],
      )
    },
  },
  {
    accessorKey: 'meetingCount',
    header: 'Meetings',
    cell: ({ row }) => {
      return h(
        Badge,
        { variant: 'outline', class: 'flex items-center gap-x-2 [&>svg]:size-4' },
        () => [
          h(VideoIcon, { class: 'text-blue-700' }),
          5,
          row.original.meetingCount === 1 ? 'meeting' : 'meetings',
        ],
      )
    },
  },
]
