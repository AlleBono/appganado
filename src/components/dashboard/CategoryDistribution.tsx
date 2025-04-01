
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Datos simulados para la distribución por categoría
const categoryData = [
  { name: 'Vacas', value: 35, color: '#6E59A5' },
  { name: 'Toros', value: 8, color: '#9b87f5' },
  { name: 'Novillos', value: 22, color: '#70E070' },
  { name: 'Terneros', value: 18, color: '#30D5C8' },
  { name: 'Vaquillas', value: 17, color: '#D6BCFA' },
];

// Componente para el tooltip personalizado
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-3 rounded-md shadow-lg border">
        <p className="font-semibold" style={{ color: payload[0].payload.color }}>
          {payload[0].name}
        </p>
        <p className="text-foreground">
          <span className="font-medium">{payload[0].value}</span> animales
        </p>
        <p className="text-muted-foreground text-xs">
          {Math.round(payload[0].percent * 100)}% del total
        </p>
      </div>
    );
  }

  return null;
};

export default function CategoryDistribution() {
  return (
    <Card className="col-span-12 lg:col-span-4">
      <CardHeader>
        <CardTitle>Distribución por Categoría</CardTitle>
        <CardDescription>Distribución actual del ganado por categorías</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={90}
                innerRadius={40}
                paddingAngle={2}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                formatter={(value, entry: any, index) => (
                  <span style={{ color: categoryData[index].color }} className="text-sm font-medium">
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
