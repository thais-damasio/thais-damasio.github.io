import { Typography, ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core';
import { School } from '@material-ui/icons';
import styled from 'styled-components';

const Education = styled.div`
    text-align: justify;
    font-weight: 300;
`;
  

function EducationComponent() {
    return (
        <Education>
            <Typography variant="h6" component="h3">Education</Typography>
            <List>
                <ListItem>
                  <ListItemIcon>
                    <School />
                  </ListItemIcon>
                  <ListItemText
                    primary="Master’s Degree in Computer Science [2021 - Currently]"
                    secondary='Federal University of Minas Gerais (UFMG) with the supervision of the Fernando M. Q. Pereira'
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <School />
                  </ListItemIcon>
                  <ListItemText
                    primary="Bachelor’s Degree in Information System [2017 - 2020]"
                    secondary='Pontifical Catholic University of Minas Gerais (PUC Minas) with the supervision of the Luís F. W. Góes'
                  />
                </ListItem>
            </List>
        </Education>
    );
}

export default EducationComponent;
