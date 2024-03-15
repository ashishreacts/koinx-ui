import { Info } from "@mui/icons-material";
import {
  Card,
  CardHeader,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

export const PerformanceTable = () => {
  const rowData = [
    [
      { name: "Bitcoin Price", value: "$16,534.88" },
      { name: "Market Cap24h Low / 24h High", value: "$16,382.07/$16,874.12" },
      { name: "7d Low/7d High", value: "$16,382.07/$16,874.12" },
      { name: "Trading Volume", value: "$23,249,202,782" },
      { name: "Market Cap Rank", value: "#1" },
    ],
    [
      { name: "Market Cap", value: "$323,507,290,047" },
      { name: "Market Cap Dominance", value: "38.343%" },
      { name: "Volume / Market Cap", value: "0.0718" },
      {
        name: "All-Time High",
        value: "$69,044.77-75.6% Nov 10, 2021 (about 1 year)",
      },
      {
        name: "All-Time Low",
        value: "$67.81 24729.1% Jul 06, 2013 (over 9 years)",
      },
    ],
  ];
  return (
    <Card>
      <CardHeader
        title={
          <Typography component="h1" variant="h6">
            Fundamentals <Info sx={{ verticalAlign: "middle" }} />
          </Typography>
        }
      />

      <Grid container marginTop={0.5} spacing={2}>
        <Grid item xs={12} md={6}>
          <TableContainer>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableBody>
                {rowData[0].map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <TableContainer>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableBody>
                {rowData[1].map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Card>
  );
};
