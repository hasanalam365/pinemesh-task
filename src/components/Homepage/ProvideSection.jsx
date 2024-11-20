import Image from 'next/image';
import React from 'react';

const ProvideSection = () => {
    return (
        <div className='flex  justify-between gap-8  mx-8 mt-8'>
            <div className='flex-1'>
                <h2 className='text-xl font-semibold mb-8'>We provide...</h2>
               <div className="collapse bg-base-200 ">
  <input type="radio" name="my-accordion-1" defaultChecked />
  <div className="collapse-title text-xl font-medium">Personalized routine</div>
  <div className="collapse-content">
    <p>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</p>
  </div>
</div>
<div className="collapse bg-base-200 mt-3">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Follow-up after completing courses</div>
  <div className="collapse-content">
    <p>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</p>
  </div>
</div>
<div className="collapse bg-base-200 mt-3">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Access to additional resources</div>
  <div className="collapse-content">
    <p>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</p>
  </div>
</div>
<div className="collapse bg-base-200 mt-3">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Free community support</div>
  <div className="collapse-content">
    <p>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</p>
                    </div>
                  
                </div>
                  <button className="btn btn-outline text-primary mt-5 rounded-full">Learn more about our services</button>

            </div>
            <div className=''>
                <Image src="/provide.png" alt='provide image' width={450} height={350}/>
            </div>
        </div>
    );
};

export default ProvideSection;