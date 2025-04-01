
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Datos simulados para el gráfico de ventas
const salesData = [
  {
    name: 'Ene',
    ventas: 4000,
    animales: 12,
  },
  {
    name: 'Feb',
    ventas: 3000,
    animales: 9,
  },
  {
    name: 'Mar',
    ventas: 5000,
    animales: 15,
  },
  {
    name: 'Abr',
    ventas: 2780,
    animales: 8,
  },
  {
    name: 'May',
    ventas: 3890,
    animales: 11,
  },
  {
    name: 'Jun',
    ventas: 2390,
    animales: 7,
  },
  {
    name: 'Jul',
    ventas: 3490,
    animales: 10,
  },
  {
    name: 'Ago',
    ventas: 2000,
    animales: 6,
  },
  {
    name: 'Sep',
    ventas: 2780,
    animales: 8,
  },
  {
    name: 'Oct',
    ventas: 1890,
    animales: 5,
  },
  {
    name: 'Nov',
    ventas: 2390,
    animales: 7,
  },
  {
    name: 'Dic',
    ventas: 3490,
    animales: 10,
  },
];

// Formatear el valor para mostrar pesos ($)
const formatCurrency = (value: number) => {
  return `$${value.toLocaleString()}`;
};

// Componente para el tooltip personalizado
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-3 rounded-md shadow-lg border">
        <p className="font-semibold">{label}</p>
        <p className="text-primary">{`Ventas: ${formatCurrency(payload[0].value)}`}</p>
        <p className="text-success">{`Animales: ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function SalesChart() {
  return (
    <Card className="col-span-5">
      <CardHeader>
        <CardTitle>Resumen de Ventas</CardTitle>
        <CardDescription>Ingresos y cantidad de animales vendidos en el último año</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={salesData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#888" tick={{ fill: '#888', fontSize: 12 }} />
              <YAxis 
                yAxisId="left" 
                stroke="#888" 
                tick={{ fill: '#888', fontSize: 12 }} 
                tickFormatter={(value) => `$${value}`} 
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                stroke="#888" 
                tick={{ fill: '#888', fontSize: 12 }} 
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="ventas"
                name="Ventas ($)"
                stroke="#6E59A5"
                strokeWidth={2}
                dot={{ r: 3, strokeWidth: 2 }}
                activeDot={{ r: 6, stroke: '#6E59A5', fill: '#6E59A5' }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="animales"
                name="Animales"
                stroke="#70E070"
                strokeWidth={2}
                dot={{ r: 3, strokeWidth: 2 }}
                activeDot={{ r: 6, stroke: '#70E070', fill: '#70E070' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
