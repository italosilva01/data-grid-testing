import { Box, Typography, Link } from '@mui/material'

export const Footer = () => {
  return (
    <Box 
      component="footer" 
      className="w-full py-6 mt-8 bg-gray-800 text-white"
      role="contentinfo"
    >
      <Box className="flex flex-col items-center justify-center gap-2">
        <Typography variant="body1" className="font-medium">
          Francisco Italo
        </Typography>
        <Link
          href="mailto:italo.silvan87@gmail.com"
          className="text-blue-300 hover:text-blue-200 transition-colors"
          underline="hover"
          aria-label="Enviar email para Francisco Italo"
          tabIndex={0}
        >
          italo.silvan87@gmail.com
        </Link>
      </Box>
    </Box>
  )
}
