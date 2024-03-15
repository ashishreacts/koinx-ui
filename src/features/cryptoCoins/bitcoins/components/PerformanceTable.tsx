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
  const row = [
    { name: "Bitcoin Price", value: "$16,534.88" },
    { name: "Market Cap24h Low / 24h High", value: "$16,382.07/$16,874.12" },
    { name: "7d Low/7d High", value: "$16,382.07/$16,874.12" },
    { name: "Trading Volume", value: "$23,249,202,782" },
    { name: "Market Cap Rank", value: "#1" },
  ];
  const row1 = [
    { name1: "Market Cap", value1: "$323,507,290,047" },
    { name1: "Market Cap Dominance", value1: "38.343%" },
    { name1: "Volume / Market Cap", value1: "0.0718" },
    {
      name1: "All-Time High",
      value1: "$69,044.77-75.6% Nov 10, 2021 (about 1 year)",
    },
    {
      name1: "All-Time Low",
      value1: "$67.81 24729.1% Jul 06, 2013 (over 9 years)",
    },
  ];
  return (
    <Card>
      <CardHeader
        title={
          <Typography
            component="h1"
            variant="h6"
            sx={{ display: "flex", justifyContent: "flex-start", mt: 1 }}
          >
            Fundamentals <Info />
          </Typography>
        }
      />

      <Grid container marginTop={0.5} spacing={2}>
        <Grid item xs={12} md={6}>
          <TableContainer>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableBody>
                {row.map((row) => (
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
                {row1.map((row) => (
                  <TableRow
                    key={row.name1}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name1}
                    </TableCell>
                    <TableCell align="right">{row.value1}</TableCell>
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
