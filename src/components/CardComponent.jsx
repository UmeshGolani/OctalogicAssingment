import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';

const CardComponent = ({info, description, link}) => {
  return (
    <div>
        <Card className="w-full max-w-sm bg-white shadow rounded-md flex">
      <CardHeader className="flex items-center p-4">
        <div className="bg-green-100 p-2 rounded-full">
          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <p className="ml-3 text-2xl font-semibold">{info}</p>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-end px-4 py-2">
        <a href={link} className="text-pink-600 hover:underline">View</a>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default CardComponent