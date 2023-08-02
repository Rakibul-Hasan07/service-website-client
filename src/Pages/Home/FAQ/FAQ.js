import React from 'react';

const FAQ = () => {
    return (
        <div className='my-2'>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-xl font-semibold sm:text-2xl mb-2">People Also Asked</h2>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What types of photography do you do?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Some photographers do a little of everything. Others specialize in one type of photography or another. The first thing that people are going to want to know is what kind of services you offer. If they’re looking for a family photographer or someone to do their son’s senior portraits, for example, they wouldn’t want to work with a wedding photographer. Make sure that you list all the different types of sessions or services you can provide, as well as anything you’re willing to discuss on a case-by-case basis. This is your chance to educate people, but also encourage them to reach out to you to discuss what they need and how you can help.  </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Why should I hire a professional photographer?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">This is the million-dollar question. People want to know exactly what it is that sets you apart and makes you worth their time. This is your place to make it known. Explain all the benefits of working with a professional, including the fact that you won’t have to worry about one of your family members or friends missing out on whatever event is being captured because they’re the one manning the camera. Explain that you have experience in producing high-quality images that will last a lifetime and create wonderful memories and take advantage of this opportunity to link to testimonials to seal the deal. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">How much are your photography services?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">This might seem like it’s too open-ended for an FAQ page, but that’s the genius of it—it allows you a little room to market your services and link to your pricing page so that you can convert more leads and generate more website traffic. In this answer, you should advise on how your rate structure works, whether you charge hourly, per session, or by the event, if packages are available, and so forth. Give people a condensed version of your pricing page, and then use the opportunity to link to that page for people who want more information. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Do I get the copyright/ownership of my photos?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Ownership is a big topic in the world of photography. You’ll want to make sure that you explain the process of delivering images, including who retains ownership, whether people have the right to copy or make additional prints, and so forth. If you keep the raw image files and don’t provide them, explain why. Make sure that you’re completely transparent about what your clients get when they work with you so that they can make an educated decision. You don’t necessarily have to give up the copyright; a proper explanation is sometimes all that people need. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;