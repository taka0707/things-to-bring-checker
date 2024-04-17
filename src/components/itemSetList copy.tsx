import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  Typography,
  Chip,
  Stack,
  Paper,
} from '@mui/material'
import type React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useState, useEffect } from 'react'
// import { useState } from "react"

type SetItem = {
  id: string
  items: { id: string; name: string }[]
  groupId: number
  groupName: string
}

type SetData = {
  id: string
  setName: string
  setItems: SetItem[]
}

const createItem = (id: string, name: string) => {
  return { id, name }
}

const createData = (
  id: string,
  items: { id: string; name: string }[],
  groupId: number,
  groupName: string,
): SetItem => {
  return { id, items, groupId, groupName }
}

const testData: SetData[] = [
  {
    id: 'set1',
    setName: 'グループ1',
    setItems: [
      createData('setItem1', [createItem('item1', '傘')], 0, ''),
      createData(
        'setItem2',
        [createItem('item2', 'タオル'), createItem('item3', 'ティッシュ')],
        1,
        'エチケット',
      ),
    ],
  },
  {
    id: 'set2',
    setName: 'グループ2',
    setItems: [
      createData('setItem3', [createItem('item4', 'タオル')], 1, 'エチケット'),
      createData('setItem4', [createItem('item5', 'コンタクト')], 0, ''),
      createData(
        'setItem5',
        [createItem('item6', '洗顔'), createItem('item7', '化粧水')],
        2,
        'アメニティ',
      ),
    ],
  },
]

export const ItemSetList: React.FC = () => {
  const [itemSetData, setItemSetData] = useState<SetData[]>([])

  useEffect(() => {
    setItemSetData(testData)
  }, [])

  return (
    <Box>
      <Container>
        <Box py={2}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            ItemGroupList
          </Typography>
        </Box>
        {itemSetData.map((data: SetData) => (
          <Card key={data.id} sx={{ minWidth: 275, mb: 2 }}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={data.setName}
            />
            <CardContent>
              <Stack direction="row" spacing={1}>
                {data.setItems.map((setItem: SetItem) =>
                  setItem.items.length === 1 ? (
                    <Chip
                      key={setItem.items[0].id}
                      label={setItem.items[0].name}
                      variant="outlined"
                    />
                  ) : (
                    <Paper variant="outlined" sx={{ p: 1 }} key={data.id + setItem.id}>
                      {/* <Typography variant="subtitle1">{setItem.groupName}</Typography> */}
                      <Stack direction="row" spacing={1}>
                        {setItem.items.map((item: { id: string; name: string }) => (
                          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                          <Chip key={item.id} label={item.name} variant="outlined" />
                        ))}
                      </Stack>
                    </Paper>
                  ),
                )}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  )
}
