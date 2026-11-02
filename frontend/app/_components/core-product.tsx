import {
  ArrowRight,
  Blocks,
  BookCopy,
  CircuitBoard,
  UsersCollaboration,
} from 'lucide-react';

function CoreProduct() {
  return (
    <section
      className='w-full py-space-3xl relative bg-white border-b border-surface-container'
      id='kits'
    >
      <div className='max-w-[1320px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg'>
        {/* <!-- Section Header --> */}
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl'>
          <div className='space-y-space-xs max-w-2xl'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-fixed/50 text-secondary font-label-caps text-label-caps uppercase'>
              Product Ecosystem
            </div>
            <h2 className='font-headline-lg text-headline-lg text-text-primary tracking-tight'>
              Precision Hardware. Intuitive Software. Inspiring Minds.
            </h2>
            <p className='font-body-md text-body-md text-text-secondary'>
              Engineered specifically to scale with students from early
              curiosity to advanced mechatronic prototyping.
            </p>
          </div>
          <div className='shrink-0'>
            <a
              className='inline-flex items-center gap-space-xs font-title-md text-body-md text-primary hover:text-electric-coral transition-colors font-bold'
              href='#'
            >
              View All Equipment &amp; Bundles
              <ArrowRight className='size-5' />
            </a>
          </div>
        </div>
        {/* <!-- Bento-style 4 Card Architecture --> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter'>
          {/* <!-- Product Card 1: Spark Kit --> */}
          <div className='group flex flex-col justify-between rounded bg-white border border-surface-container-high p-space-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px]'>
            <div>
              <div className='h-48 w-full rounded overflow-hidden bg-surface-container-low mb-space-md relative'>
                <img
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  data-alt='Close up photography of modular children robotics chassis with colorful magnetic snap-fit blocks, ultrasonic distance sensor eyes, high-torque micro servos, and glowing LED indicators on a clean dark studio workbench with warm orange and cool cyan rim light.'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuBt2DOHuILNrxz6htdJCD_8r1kUnPSM9fi9_WzPVEM8T1wi6oAOzt2d7IYuD7CSoZvneHKJS8ckhxEvwINM-Q5JX6mOlrFut81EUN-qTpQRzWSH2CLLpgr3DMN6V9yThRIebAYmYcE1twAVSz-XIMFCju_TVXWjiKrP_0csX5lQthJMLOFST3_qvOqWbGAuKzXb0Z4GKZhJBKK0O6kdUr23ID8tsF_RxIjfVMJTQQCx'
                />
                <span className='absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur font-label-caps text-label-caps text-primary font-bold shadow-sm'>
                  Ages 6 - 10
                </span>
              </div>
              <div className='flex items-center gap-2 text-glow-amber mb-1'>
                <Blocks className='size-5' />
                <span className='font-label-caps text-label-caps uppercase tracking-wider font-bold'>
                  Tactile Beginner
                </span>
              </div>
              <h3 className='font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors'>
                Obo Spark Robotics Kit
              </h3>
              <p className='font-body-sm text-body-sm text-text-secondary mt-space-xs leading-relaxed'>
                Modular snap-fit magnetic sensors, drag-and-drop block coding,
                and storytelling missions designed for early elementary motor
                and logic development.
              </p>
            </div>
            <div className='pt-space-md flex items-center justify-between border-t border-surface-container mt-space-md'>
              <span className='font-title-md text-body-sm text-text-tertiary'>
                30+ Modules Included
              </span>
              <button className='w-9 h-9 rounded bg-surface-container flex items-center justify-center text-text-primary hover:bg-primary hover:text-on-primary transition-colors'>
                <ArrowRight className='size-5' />
              </button>
            </div>
          </div>
          {/* <!-- Product Card 2: Cortex Advanced Platform --> */}
          <div className='group flex flex-col justify-between rounded bg-white border border-surface-container-high p-space-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px]'>
            <div>
              <div className='h-48 w-full rounded overflow-hidden bg-surface-container-low mb-space-md relative'>
                <img
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  data-alt='Futuristic autonomous ground vehicle chassis kit with aluminum frame, LiDAR turret, dual DC brushless motors, ESP32 microcontroller board, and visible circuit traces illuminated under high contrast deep blue laboratory lighting.'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuAP3LB8Irl98H3c4TzYeIR4yAYmjZvXrlVYxeGJspOb2UThJY8VLTw6eE2cYD0IyCjYRiqfQpIOzDeu1-5ODIURVFVMd5C0zVU-ZNr4glAc-8u48daGTz14fK1_guk4dLxXHZQzqHcAzLEMzgjdRudD4ykvLgJyEr1Dj07_9nrDdSnGPGZZFFrRXl-ViUv2Bw8SB1arsQyl8teBxO6jfAQ5gQI1hPCF5SpL1ywbEbKW'
                />
                <span className='absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur font-label-caps text-label-caps text-secondary font-bold shadow-sm'>
                  Ages 11 - 16+
                </span>
              </div>
              <div className='flex items-center gap-2 text-secondary mb-1'>
                <CircuitBoard className='size-5' />

                <span className='font-label-caps text-label-caps uppercase tracking-wider font-bold'>
                  Advanced Mechatronics
                </span>
              </div>
              <h3 className='font-headline-sm text-headline-sm text-text-primary group-hover:text-secondary transition-colors'>
                Obo Cortex Advanced Platform
              </h3>
              <p className='font-body-sm text-body-sm text-text-secondary mt-space-xs leading-relaxed'>
                Microcontroller architecture supporting native MicroPython and
                C++. Features autonomous maze navigation, LiDAR integration, and
                kinematic arms.
              </p>
            </div>
            <div className='pt-space-md flex items-center justify-between border-t border-surface-container mt-space-md'>
              <span className='font-title-md text-body-sm text-text-tertiary'>
                Dual Core 240MHz
              </span>
              <button className='w-9 h-9 rounded bg-surface-container flex items-center justify-center text-text-primary hover:bg-secondary hover:text-on-secondary transition-colors'>
                <ArrowRight className='size-5' />
              </button>
            </div>
          </div>
          {/* <!-- Product Card 3: Integrated K-12 STEAM Curriculum --> */}
          <div className='group flex flex-col justify-between rounded bg-white border border-surface-container-high p-space-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px]'>
            <div>
              <div className='h-48 w-full rounded overflow-hidden bg-surface-container-low mb-space-md relative'>
                <img
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  data-alt='A modern curriculum interface on a sleek tablet showing interactive 3D physics simulations, lesson sequence tracks, grading rubrics for teachers, and colorful engineering milestones against dark mode software UI with orange highlight buttons.'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuCQyPrxg6Yh0-LiEmdK5N6EktucF9f696A1CTq9NUDN79WRSKDtfite8_JMH-uZ_BIaUmFhSfZrK_eru-UPoHGq28FLr_6f57TZBHXEdRLVCtiImlwGQ9qYL1CIgufK9eAcj_dVVmDfmubJ9MHTJ1FwiHSsw5bu3KLvwdZU7QGJVK4oJnEy5ARL1MBPhaUtOuhNUhgGO_K-fKSAa6Ewf5c8vyBr8RveDmXTbs4C8hty'
                />
                <span className='absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur font-label-caps text-label-caps text-glow-amber font-bold shadow-sm'>
                  NGSS Aligned
                </span>
              </div>
              <div className='flex items-center gap-2 text-tertiary mb-1'>
                <BookCopy className='size-5' />

                <span className='font-label-caps text-label-caps uppercase tracking-wider font-bold'>
                  Academic Framework
                </span>
              </div>
              <h3 className='font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors'>
                Integrated K-12 STEAM Curriculum
              </h3>
              <p className='font-body-sm text-body-sm text-text-secondary mt-space-xs leading-relaxed'>
                Turnkey multi-grade lesson guides, standardized evaluation
                rubrics, student lab journals, and mapped international
                engineering benchmarks.
              </p>
            </div>
            <div className='pt-space-md flex items-center justify-between border-t border-surface-container mt-space-md'>
              <span className='font-title-md text-body-sm text-text-tertiary'>
                36 Ready Semesters
              </span>
              <button className='w-9 h-9 rounded bg-surface-container flex items-center justify-center text-text-primary hover:bg-primary hover:text-on-primary transition-colors'>
                <ArrowRight className='size-5' />
              </button>
            </div>
          </div>
          {/* <!-- Product Card 4: Educator & School Enablement --> */}
          <div className='group flex flex-col justify-between rounded bg-white border border-surface-container-high p-space-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px]'>
            <div>
              <div className='h-48 w-full rounded overflow-hidden bg-surface-container-low mb-space-md relative'>
                <img
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  data-alt='A passionate female STEM teacher leading an interactive robotics professional development workshop for fellow educators, holding an Obo micro-robotics controller while teachers smile and build robotic chassis around a conference table in an innovative laboratory.'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuC5D0KPCACzkqtVyhXVawOJcNzR2xL7_bwURJMkzpU-TWOqPdaiN08qhpH1IIrzcB8WrEM6CEphR_gqPw_GLwNlY-JjsQA4Rr1h4LvKh3d0tcyD2tfSvNDW8dROTtslt54RD9iJRWs3tdUeIA_TsNwsbn7jWd5yBZxnoNh2Abr0RVgGis9flSjRcGVU9p-5sX4rJ8RQqQXaIeZVIFQu08_LUiKLQ47KcDms3jOxpTfb'
                />
                <span className='absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur font-label-caps text-label-caps text-primary font-bold shadow-sm'>
                  Certified PD
                </span>
              </div>
              <div className='flex items-center gap-2 text-primary mb-1'>
                <UsersCollaboration className='size-5' />

                <span className='font-label-caps text-label-caps uppercase tracking-wider font-bold'>
                  Institutional Support
                </span>
              </div>
              <h3 className='font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors'>
                Educator Enablement Program
              </h3>
              <p className='font-body-sm text-body-sm text-text-secondary mt-space-xs leading-relaxed'>
                Live professional development bootcamps, hardware warranty
                exchange pools, continuous teacher mentoring, and tournament
                hosting kits.
              </p>
            </div>
            <div className='pt-space-md flex items-center justify-between border-t border-surface-container mt-space-md'>
              <span className='font-title-md text-body-sm text-text-tertiary'>
                On-Site &amp; Virtual
              </span>
              <button className='w-9 h-9 rounded bg-surface-container flex items-center justify-center text-text-primary hover:bg-secondary hover:text-on-secondary transition-colors'>
                <ArrowRight className='size-5' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { CoreProduct };
