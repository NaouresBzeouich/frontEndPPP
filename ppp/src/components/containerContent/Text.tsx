import Typography from '@mui/material/Typography';


export default function TextContent(){
    return (
        <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
           Discover our innovative platform where AI recommends photos based on your input.
            Elevate your visual experience with our advanced technology and curated image suggestions.
          </Typography>
    ); 
}