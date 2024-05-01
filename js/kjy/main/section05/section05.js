"use strict"

import { isDesktop, isMobile } from "../../constant/responsive.js";

gsap.registerPlugin(ScrollTrigger);

export default ()=>{

    ScrollTrigger.create({
        trigger : "._main .section05",
        // markers : true,
        start : "top top",
        invalidateOnRefresh : true,
        onEnter : ()=>{
            $('.header').removeClass("on");
        },
        onLeaveBack : ()=>{
            $('.header').addClass("on");
        }
    });


    const mm = gsap.matchMedia();

    mm.add({
        isDesktop,
        isMobile
    },(context)=>{

        const {isDesktop,isMobile} = context.conditions;

        $('._main .section05 .grid .col').each((_,e)=>{

            gsap.set(e,{
                z : 'random(-30, -5000)',
                rotateX : 'random(-10, -60)',
                scaleY : 'random(1, 1.2)',
                xPercent : `random(-100, 100)`,
                yPercent : `random(-100, 100)`,
                // transformOrigin: "33% 0"
            })
    
        });
    
        const ab = gsap.timeline({
            scrollTrigger : {
                trigger : "._main .section05",
                start : "top-=15% center",
                end : "bottom bottom",
                scrub : true,
                // markers : true
            }
        })
    
        ab.fromTo('._main .section05 .grid',{
            yPercent : 75,
            z : -2000
        },{
            yPercent : 0,
            z : 0
        });
    

        const tl = gsap.timeline({
            scrollTrigger : {
                trigger : "._main .section05",
                start : "top top",
                // start : isDesktop ? "top top+=25%" : "top top",
                end : "+=300%",
                // end : "bottom center",
                pin : true,
                /* 
                pinSpacing : true, */
                scrub : true,
                // markers : true
            }
        });

        $('._main .section05 .tbx dd .p span').each((i,e)=>{
            tl.to(e,{
                clipPath: "inset(0% 0% 0% 0%)"
            },i === 0 ? 'a' : "a+=50%");
        })
        
        $('._main .section05 .grid .col').each((_,e)=>{
    
            tl.to(e,{
                rotateX : 0,
                scaleY : 1,
                xPercent : 0,
                yPercent : 0,
            },'a');
    
        });
    
        tl.fromTo('._main .section05 .grid',{
            z : 0,
            yPercent : 0,
            scale : 1
        },{
            z : 7000,
            yPercent : -20,
            scale : 1.2
        },'a');

    })


}