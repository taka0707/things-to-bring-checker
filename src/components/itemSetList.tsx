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
  name: string
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
  name: string,
  // groupId: number,
  // groupName: string,
): SetItem => {
  return { id, name }
}

const testData: SetData[] = [
  {
    id: 'set1',
    setName: 'グループ1',
    setItems: [
      createData('setItem1', '傘'),
      createData('setItem2', 'タオル'),
      createData('setItem3', 'ティッシュ'),
    ],
  },
  {
    id: 'set2',
    setName: 'グループ2',
    setItems: [
      createData('setItem4', 'タオル'),
      createData('setItem5', 'コンタクト'),
      createData('setItem6', '洗顔'),
      createData('setItem7', '化粧水'),
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
                {data.setItems.map((item: SetItem) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <Chip key={item.id} label={item.name} variant="outlined" />
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  )
}
