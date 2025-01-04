/* eslint-disable @next/next/no-img-element */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const InfoCard = (
    {
        title,
        description,
        link,
        imageUri,
        githubLink
    }: {
        title: string,
        description: string,
        link: string,
        imageUri: string,
        githubLink: string
    }
) => {
    return (
        <Card className="w-max max-w-sm p-6 shadow-lg rounded-lg border border-gray-200">
            <CardHeader className="mb-4">
                <CardTitle className="  font-semibold text-slate-600 text-3xl">
                    <img src={imageUri} alt={title} className="w-12 h-12 rounded-full inline-block mr-2 border border-solid border-slate-800 p-1" />
                    {title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
                >
                    Visit
                </a>
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
                >
                    Visit Github
                </a>
                
            </CardFooter>
        </Card>
    );
};

export default InfoCard;
