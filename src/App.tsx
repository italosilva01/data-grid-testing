import { useState } from 'react'
import { Button, Card, CardContent, Typography, Box } from '@mui/material'
import { Favorite, Add } from '@mui/icons-material'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center p-4">
      <Card className="max-w-md w-full shadow-2xl">
        <CardContent className="p-8">
          <Box className="text-center space-y-6">
            <Typography variant="h3" component="h1" className="font-bold text-gray-800">
              Material UI + TailwindCSS
            </Typography>

            <Typography variant="body1" className="text-gray-600">
              Exemplo combinando Material UI com TailwindCSS
            </Typography>

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
    </div>
  )
}

export default App
