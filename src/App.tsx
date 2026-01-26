import { useEffect, useState } from 'react'
import { Button, Card, CardContent, Typography, Box } from '@mui/material'
import { Favorite, Add } from '@mui/icons-material'
import { Search } from '@shared/components'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log(search)
  }, [search])

  return (
    <div className="min-h-screen w-full bg-blue-50 flex items-center justify-center p-4">

      <Card className="max-w-7xl shadow-2xl mx-auto w-5xl" sx={{ borderRadius: 2 }}>
        <CardContent className="p-8">
          <Box className="text-left space-y-6">
            <Box>
              <Typography variant="h5" component="h1" className="font-bold text-gray-800">
                Colaboradores
              </Typography>
              <Search placeholder="Pesquisar por colaborador" onChange={(e) => setSearch(e.target.value)} />
            </Box>

            <div className="flex flex-col gap-4 mt-6">
              <Button
                variant="contained"
                color="primary"
                onClick={handleIncrement}
                startIcon={<Add />}
                className="py-3"
              >
                Contador: {count}
              </Button>

              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Favorite />}
                className="py-3"
              >
                Botão com Ícone
              </Button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <Typography variant="body2" className="text-blue-800">
                ✨ TailwindCSS funciona perfeitamente com Material UI!
              </Typography>
            </div>
          </Box>
        </CardContent>
      </Card>
    </div >
  )
}

export default App
