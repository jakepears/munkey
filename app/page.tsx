import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white px-2">
        <h1 className="text-5xl font-bold mb-20">Munkey</h1>
        <div className='flex space-x-2 text-center'>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <SunIcon className='h-8 w-8' />
                    <h2>Examples</h2>
                </div>
                <div className="space-y-2 ">
                    <p className="infoText">"Explain something to me."</p>
                    <p className="infoText">"What is the difference between a dog and a cat?"</p>
                    <p className="infoText">"What is the color of the sun?"</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <BoltIcon className='h-8 w-8' />
                    <h2>Source</h2>
                </div>
                <div className="space-y-2 ">
                    <p className="infoText">This is a Chat GPT remake by Jake Pearson.</p>
                    <p className="infoText">To connect with me via LinkedIn <br /><a href="http://www.linkedin.com/in/jakepearson123">Click Here</a></p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <ExclamationTriangleIcon className='h-8 w-8' />
                    <h2>Limitations</h2>
                </div>
                <div className="space-y-2 ">
                    <p className="infoText">I can't express feelings.</p>
                    <p className="infoText">I don't like to talk about how I was made.</p>
                    <p className="infoText">Jake didn't make me very colorful :/</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomePage