(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 430,
	height: 740,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_heart1.png", id:"_heart1"},
		{src:"images/_heart2.png", id:"_heart2"},
		{src:"images/_heart3.png", id:"_heart3"},
		{src:"images/_heart4.png", id:"_heart4"},
		{src:"images/_heart5.png", id:"_heart5"},
		{src:"images/_heart6.png", id:"_heart6"},
		{src:"images/_heart7.png", id:"_heart7"},
		{src:"images/_heart8.png", id:"_heart8"},
		{src:"images/_heart9.png", id:"_heart9"},
		{src:"images/_heart10.png", id:"_heart10"},
		{src:"images/_heart11.png", id:"_heart11"},
		{src:"images/_heart12.png", id:"_heart12"}
	]
};

// stage content:
(lib.sercejs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.heart = new lib.Pokaz();
	this.heart.setTransform(198.1,373,1.753,1.769,0,0,0,400,225.1);

	this.timeline.addTween(cjs.Tween.get(this.heart).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288.2,344.8,1402.5,796);


// symbols:
(lib._heart1 = function() {
	this.initialize(img._heart1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib._heart2 = function() {
	this.initialize(img._heart2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib._heart3 = function() {
	this.initialize(img._heart3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib._heart4 = function() {
	this.initialize(img._heart4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib._heart5 = function() {
	this.initialize(img._heart5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib._heart6 = function() {
	this.initialize(img._heart6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib._heart7 = function() {
	this.initialize(img._heart7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib._heart8 = function() {
	this.initialize(img._heart8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib._heart9 = function() {
	this.initialize(img._heart9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib._heart10 = function() {
	this.initialize(img._heart10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib._heart11 = function() {
	this.initialize(img._heart11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib._heart12 = function() {
	this.initialize(img._heart12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib.Pokaz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AFPfoIg7gOIgFgBQjKgyjChKQi7hFinhqQgvgegsghQg7gvg1g0QghgggcghIgEgGQghgngcgtQhsimgmjCIgBgDIgHgnQgKhDgIhCIAAAAIgCgPQgMgJgKgIIgIgHIgIgJIgRgXQgJgOgHgQIgRgnIgYg1IgLgaIgUgyIgSgyQgXhHgPhIQgQhKAAh/QAAiAAlh3QAkh7AYhCQAehOAlhJIBAhvQBiiYBniVQCnjxCYj7QAig4ARg8IAghuIAMhCQALg0ANgzQAOg4AXg1IABgDQAlhagChgIAZghIgBgBIgYAiQACBggmBaQAVheANhcQAFgiAWgUIEDBWQgJCzhfC7QA+AjBFhHQgPg8AIhCQAeiJgQgQQBFggAqAbIgeDOQAZgnA/AbIAFAAIAAgaIAAgBIgBAAIAAAAIgBgCQASgoA/AwQAhgHAgAHQgCAhAAANIABAJIAAALIAFBRIABASQABAdgDA4QgDA5AAApQAAApASBEQARBEAtAyQAIADASAnQASAoAPBVIAAABIABACIABAEIAYAOIAGADQBYAwBXAzIBVAxQA/AkBaAXICJAtIAHACIAHAFIAHBVIgTAaIBbBbQALAjgRAiIgHALIgzA/IgtAIIg9gpIgKgGIAAABIgKgFIgogVIAAgBIiBhLQAKAjANAkIAEAMIABACIABABIAJAXIACAFIABADIABAEIABABIAJASIAIATIAHAWIAWBAQAMAmAGAmIABAIIABAIQAEAngBAkQgDBdgWBXQgHAbgRAXIgBAAQATATAQAUIAAAAIAOAQQAeAnAZAsQA2BgARBuQAQBsAMBrIABAIQAJA5AHA6QAWC3gOC2IgBAQQgEBYgMBWQgMBdgjBXQgSAxgVAvQgkBOgqBLQggA5gvAtQg8A7hIAtQgdATgjAAIgmACIgCAAQg5ARg8AAQhaAAhWgUgANBn9IAKAGIgKgHg");
	var mask_graphics_2 = new cjs.Graphics().p("EAEwAgAIhAgPQjNgyjChLQiYg5iLhRIhBgnIgNgHIgKAAIgfgXIgTgOQhHgzhAg/QgogmgkgrQgVgYgQgaIgOgZQg5hogkhxQgmh3geh6IgMgxQgFgYgBgYQAAgfAFgfQgogfgMguIgDgMIgDgNIgEgOQgWhhgShhQgUh2gMh1QgCgcAAgZQABgdAFgcQAGgnAIgmQADgRAEgRQA/kPB1j9IAGgOIABgBQASg7AfgzIBYiTIgKAAIABgBIAUgiQBiipBcisIADgGIATgkQAthUAqhUQAZgzAHg5QAMhWAPhUIABgGQAdicA6iTQAPgnAAgrQAIgPALgJIAJgHQAIgGACgHIAXgGIBEANQCGAjAPAaQAdA6iTFMQBHAUBshnQBCh5gzhfQA7gUBAAMIghCqQArgCA7AtIgHgvQAogtAjA4QA7gZAKAqIgBAJQADC7AIC6QACAjAPAhIArBZQAoBAAIAdQAOAzAKA0IADACIAAAGIARAKIAFADQBZAwBXAzIBVAxQA+AkBaAXICKAtIAGACIAIAFIAHBVIgUAaIBcBbQAIAagIAaQgCAJgEAIIgHALIgOARIgmAuIgsAIIgMgIIAAABIjniQQASA0AUAxQASAqALAsQAsCtgOCsIgCAKQgBAGgCAEIgFARQgDANgGAKQgGANgKAJQgHAJgNAFIAUASQAZAcAVAeQA6BVAcBiQAuCeAaCiQALA+AHBAQAXC/gQDAQgEBXgMBYQgNBdghBYQgTAwgWAvIgCAFIgXAyIgZAvQgNAbgPAaQghA5gvAuQg8A7hIAtQgeASgjABIgmACQg6ARg+AAQhZAAhXgUg");
	var mask_graphics_3 = new cjs.Graphics().p("ACoelQiOgHiLgSQgwgFgvgLQh0gbhxghQiXgsh8heIgZgWIgVgVIgXgZIgFAAQg6g7gshHIAMAAIgCgEIgJgOIgCgEQgZgogUgpQg1hugYh5IgDgOQgHgggEggQgHgxgBgxQgDhJgYhFQgLgggFghIgdiwIgBAAIgCgJQgkiwAaiyQAGgsAIgsIABgDIAEgRQA5khBdkSIAAgBQAYhcAjhXQAOgjBAhtIAmhBIAHAAQBEh3BBh5IADgGIATglQAthUAqhUQAZgzAHg5QAHgzgEg8IAFgcQgEADAThBIAoiJQAVhIAGgOQAPgiAHglQAFgeAXg5IATgLQAggWAwANQCFAVAlA0QAIAEgoB6QgoB5hLCKQBHAQCNhyQAphTgMg5QgKg5gHgMQgIgLAbgDQAegCBIgNIgVC8IBVAtIAKg4QAQgbAfAdQAfAcAygSQgHA+ABAXIAFBRIAAATQAIBzgQBJQgCAJgBALQAJB2BFBCQAdA8ALAhIAEAOQAFAZACAZQACAMAAANIAXAHIAGACQAVAIAVAIQAaAMAaAOQA3AcA1AjIACACIAAAAIAYAPQA9AsBFAcIAXAJQAtAQAtAOIAnAMQAQAFAPAHQAWAKAUAOIAHBVIgUAaIBcBbQAKAjgQAiIgHAKIg0BAIgsAHIg9goIg+gmIgkgXIgNgHIgFgDQgXgNgXgGQgUgFgWgBQgdgBgeAEQAZALAWARQAcAYAQAfQAVAnAMAqIgCAAQAJAdAEAhQAIBTAQBSQAIApgCAoQgCAWgEAWIgEAPQgSA2g4ASQBBBEAlBXQAWA0AJA4QAhDWAjDYQAKA4AHA5IAEAbQAQBggCBhIAAABQAEBTgPBSQgGAggJAfQgTBFgcBAQgTArgYAoQgqBJg4BBQgSAUgXANQhjA0hvATQhMAPhNAHIggABIg+ACIgKAAQg8AAg8gGg");
	var mask_graphics_4 = new cjs.Graphics().p("AFIeAIg+gDIgGAAIgKgBIgsgDIhBgGIgngEQiAgMhrgMQh+gQhggQQjRgkg/geQg+gghEg6IhJhRIg5hHIgxhrIgDgFQgZg6gSg9IgKghQgThJgKhNQgFgxgBgxQAAgagDgYQgJhEgchAIgCgDIgBgDIgIgYQgLgwgPgvQgPgugDgwIgCgvIgBh5IACgjIABgQIAAgHQABg5AJg6IAOhXIAAgDIAFgRQA4kfBdkRIAAgBQAXhcAkhWIAIgTIABgEIgBAEIAIgVQAHgQAHgMIASggQBjirBdiuIAWgoIAGgIIBPiBIARgkIACgEIAWgxQAKgSAEgLIAGgRIACgGIAJhUIABgIIAGgiIACgIIArihIArisQAFgQADgSQAFgfAHgcIAAgCQAAgNAGgJIACgGQAbgNBOATQBDAPBiAiQAbAgg1BTQgNB9h5CvQBkgIB6hfQAniXgcg+IgPgjIB2gRIAAArIgcCcQBBAIAgAfQgHgwAPgWQAfgHAhAYQAPALgGgMQBOgIgYA8IgBAIQADC7gCB2QgCB3AqAxQApAwAcBfIABABIgDAAIADAJQAFAZACAZQACAMAAANIAXAHIAGACQAVAIAVAIQAaAMAaAOQA4AcA0AjIACACIABAAIAXAPQA9AsBFAcIAXAJQAtAQAtAOIAnAMQAQAFAPAHQAWAKAUAOIACAfIgBAAIAHAKIAEAqIgUAZIBcBbQAKAjgQAiIgHALIg0A/IgsAIQgagTAUANQh4hohxgQIAAAAIgEABIgOAEIACAAIgEAAQgFACgBACQA4BKAPBfQAMBGAOBGQAHAjACAhQAHA4gDA6IAAAEQgFBMg9AtQBKBeAbB2QAFAWACAVIABAGIAIBLIATCRIADAOIAOBhIACAWIAYCVIAAADIABAFIAEAVIACARIADARQAMBIAABJIABAYQABBegSBZIgEAAQgLAmgPAlIgRAlQgHAOgIAMQhiCuiABaQhfBEjfAAIgrAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AFKeIIg+gDIgHAAIgKgBIgrgEIhCgGIgogDQiAgNhsgMQh/gPhhgRQjSgkg/geQg/gghEg6IhKhSIg5hIIgxhrIgHgSIgKgcQgOgqgLgrQgOg0gKg1QgMhDgFhGQgFhIghhCIgFgLQgLgZgIgaIgKgjIAAgBQgOgxgHgkQgHgjgBgQQgBgQAEgVIgFjUIABg2QAEhFAJhFIAIg0IAEgRIAFgdQA0loBgi2QAWhTAfhRIgCAAIAVgzQAPgjAVgfIAshCIAEAAQA9hrA7hsIAgg8IADgGIAUglQARgfAQgcQAcgtAbghQAhgoAKh/QAIhEAMgsIAlh/QAZhUAchMQAchLgBgcQgBgcApgnQDsAzAQA2IiZGAQBjgHBThGIAggfQgMgWAEgtQAehlggg/QBpgrAFAkIgYCwQA/ARAhAVIAEg2QADggA+ArQA8gJAFAfQACAgAAAhQAEBGgDBZQgCBYAIBOQAIBPAtBGQAtBFAJAnQAHAbACAcIABATQB9AlBoBPQA1AnA7AdQAvAYAwATIADABIA8AUIAnAMQAmAMAiAXIAHBWIgTAZIBbBbQALAjgRAiIgHALIgzA/IgtAIIg9goIg9gnIgJgEIAAAEIgKgGIgOgJIgkgQIAAgGIgbgQQgLgFgMgCQgLgCgKAAQANAVAMAXQA/B0APCGQAGA4ALA2QAWBqg6BWQgSAbgZAVQAJAJAHAKQBCBdAQByQAuFOA0FOIACALIgEAAIAFAmQADASABASQACAYAAAWQAAArgHAqQgKBHgdBEIgRAlIgPAbQhjCuiBBbQhhBFjhAAIgpAAg");
	var mask_graphics_6 = new cjs.Graphics().p("ADpdwQligejRgkQjRgkg/gfQg+gfhEg6IhKhRIgmgxIgWglIAnAlQgPgRgKgUIgOAAQgagsgTgwIgHgSQgKgdgJgbQguiRgOiYQgCgWgFgWIgCgGIgFgRIgCgFQgXg7gbg6QgLgXgFgYQgPhFgVhDQgUhCgKhDIgOh9IAAhJQACg4AHg4QAEgZABgUIAFgjIgBAAQAjkHCUkgIABgDIAPgeQAYg0AagzIAFgMQAjhLAthEIAPgWQBRh0BJh4IADgGIgGAAIAgg9IADgGIAUgkQAQggARgbQAbgtAhgkQAggjAGiBQAQhGAGgnQAHgmAehGQAdhGAThAQAShBALg2QALg2AHgLQAHgLANgHQANgHBjAbQBRAWA4AdQANAQgNAlQgqCuhzCsQBtAGBmhfQgLg1AIgjQAZhmgOgvQBAgjAlARQAPBOgoBjQBFASAaAPIAFgkQAfgyAqBGQA1gZACAVIABAvIAEBRIABATQABAcgHBBQgIBAANBUQAOBVArA+QArBAAIAhQAIAiACAVQADAQAAAPQBJAUBAAmQBNAuBJAzIAUANIAIAFQAiASAjAQQAUAMA0AOIAAAFIAyAQIAnAMQAmAMAiAYIAHBVIgTAaIBbBbQALAjgRAiIgHAKIgzBAIgtAHIg9goIg9gmIgJgEIAAAEIgKgGIAAgBIh1hFQALAeAOAeQA0B5AWCDQAJAwACAuIAAABQACBCgJBCIgBAIQgMBCgzArQARAaALAbQAYA7APA+QALArAIArQAYBvADB1IABANIABA3IAAAGIABAHIAKApQAjCGAYCIQAQBfgLBdQgFAlgJAlQgJAigNAiIgJAYIgRAlQgIAUgFAHQhiCtiABbQhhBFjhAAQhKAAhYgIg");
	var mask_graphics_9 = new cjs.Graphics().p("AFNecIgDgBIgBAAIgEAAIhbgOIhdgRInShdIgCgBIgEAAIgDgBIgEgBIgEgBIgFgBIgFgBIgOgDIg/gOQhTgRhIgmQg9gcgygvIgagaIgDgEQghgfgeghQhQhVghhvQgehigQhlIgKhLQgIg8gDg8QhKhlgth1IgEgKIgehWIgNgxIgBgEIgCgHQgeh7gCh9IAAgkIACgtQABgXADgWQAFg3AIg2IArjaIgRAFIAHgFIAFgBIAFAAIAAAAIBLjXIBDh0QAOgUAPgXIAAgBIAAgBQAeg2Agg1IABgDIAcgyIAIgQQAagzAhguQCzj6CJkSQAJgRAGgTIAOgzQAHghANhdQAMhdAehYIArh8QANgjAPhDQAQhEAMgFQANgGAWABQAXABBiAlQBiAmAJAPIhwFqQA6ARBahPQgUgdAQhHQALgbAEg7QAFg6gMgEQA2gcA4AaQAIBbgkBTQA7gJAwArIgJgqQAAgnAwAYQAjASAugFQASAWgEAIIgBARQAEC2AABuQAABtAhA7QAiA6AaA8QAZA7AGAbQAGAWADAVQBEAaA/AmIABABIAJAEIBaA1IADACIAAABIACABIAAAAIACABIABABQBRA3AwAXIAHADIABAAIAAABIAHADIAWAAICwA5IAGACIAHAFIABAAIAHBWIgUAZIBcBbQAKAjgQAiIgHALIg0A/IgsAIIg9goIgVgNIAAAAIgJgDIAeAQIi4hdQATAyAVAuQAvBsAUBzQAHAoACAmQADA/gJBAIgCAMQgMBJg4AyQA/BJAZBhQApCdAPCjQAOCnAhClQAHAjAFAjIAAADQAKBQgEBQIgCAZQgNCchRCLQgqBJguBIQgaAqgiAhQgxAwhAAdQgRAIgRAGQgvAQgyAEQghACghAAQhXAAhWgOg");
	var mask_graphics_10 = new cjs.Graphics().p("AF3fyIhEgNQhbgShZgWQhrgbhogfIgmgMQh9gnh2g2IgYgMIgmgTQhDgjg/gqQkIi1hpktQgyiPgLiYQgDgcgLgXQhAh4gjiFIgMgmIgNgmIgBgCIgBgDIgCgEQhWjcAvjpIAEgSIADgKIAKgYIABgRIAzjAIABAAQAGgdAJgbQAOgoAIgrIABgCIBvjJIAUgfIAAgBQAfg3Ahg3IABgDQAshVA3hNIAFgIIBQh9IACgDIADgEIADgGIAFgHIBOh9IABgCIACgDIA4haIASgfQAhg4Aeg6QAZgwAPgyQASg4AGg7IAEglQANhfAchdIAHgZIABgBIAAgBIAAAAIACgIIAFgSIADgMQALgwAXgtQADiBBGAUQB4AzBgAYQAJAVgQBeQgRBehXCuQBHAbBDhFQgRhdAUg1QAWg4gNhIQBmgYASAUIgQC0QAuAEAiAaIAAgvQADgWAhAJQAQAEAYAXQBFgKgCAaIABAwIAEBQIACAUQACAfAAAgIAAAJIABAPQAABHgJBGIAGAqQAFAhAsBEQArBFAGAQQAPAmAKAoIABAAIAIArIAAACIACAFIAFACQCTBCBXA7QA3AlAnAXQAfANAjAMIAGAAIAmAMICJAtIAHACIAHAFIAHBWIgTAZIBbBbQALAjgRAiIgHALIgzA/IgtAIIg9goIgUgNIAAAAIgJgDIgzgaIAAABIgLgHIhfgwIAIAWIAFALQAQAlAOAnIADAIIADAIQAlBfARBjIAJAwQANBMgLBHIgCAVQgEBBgpAxQAnAoAcAvQAmA/ASBHQBQEsAaE1QAPCygfCuIgDAPQgHAlgJAlQgUBTgfBOIhLCVIgpBAQgoA6gwA1QgnAtg1AZQgeAPgeAKQg9AZhEAEQgdADgeAAQg5AAg7gMgAPUmWIACAAIAdAQgAO3mkIgNgHIAhAQIAAABIgUgKg");
	var mask_graphics_13 = new cjs.Graphics().p("AFPfmIg7gOIgFgBQjKgyjChJQi7hGinhqQgvgegsghQg7gug1g1QghgfgcgiIgEgFQghgogcgtQhsimgmjCIgBgDIgHgnQgKhCgIhCIAAgBIgCgPQgMgIgKgJIgIgHIgIgJIgRgXQgJgOgHgPIgRgoIgYg1IgLgZIgUgzIgSgyQgXhHgPhIQgQhKAAh/QAAiAAlh3QAkh6AYhDQAehOAlhJIBAhvQBiiYBniVQCnjwCYj8QAig4ARg8QARg3gEg3QAGghACgpQACgpAWg3QAXg3AJgfQAJgeAKgrQALgrAihGQgDgNABgMIAPgyQBWgFCrBVQARAWhlFXQAqAWA8g8QgPhEAWhDQAehIgShGQBTghAmAeIABABIgPCvQAqAGAeAPIAAAAIAHACIgCgaIABgFIgBAAIACgMQAbgYAsAsQAggIAlAZIABAbIABAJIAAAMIAFBQIABATQABAcgDA5QgDA4AAAqQAAAoASBFQARBDAtAyQAIADASAoQANAdAMA0IAIArIAAACIACAFIAYAOIAGADQBYAwBXAzIBVAxQA/AkBaAXICJAtIAHACIAHAFIAHBWIgTAZIBbBbQALAjgRAiIgHALIgzA/IgtAIIg9goIgKgHIAAABIgKgFIgogVIAAgCIiBhKQAKAkANAjIAEAMIABACIABABIAJAYIACAFIABACIABAEIABABIAJASIAIAUIAHAVIAWBAQAMAmAGAnIABAHIABAIQAEAngBAlQgDBcgWBYQgHAagRAXIgBAAQATATAQAUIAAABIAOAQQAeAnAZArQA2BhARBtQAQBsAMBsIABAHQAJA5AHA6QAWC3gOC3IgBAQQgEBXgMBXQgMBcgjBYQgSAwgVAvQgkBOgqBLQggA5gvAtQg8A7hIAtQgdATgjAAIgmADIgCAAQg5AQg8AAQhaAAhWgUgANBn/IAKAGIgKgGgAkB/HIAAAIIAAgIIAZghIgBAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:408.6,y:220.4}).wait(2).to({graphics:mask_graphics_2,x:412.3,y:219.2}).wait(1).to({graphics:mask_graphics_3,x:414.9,y:209.1}).wait(1).to({graphics:mask_graphics_4,x:415.8,y:207.1}).wait(1).to({graphics:mask_graphics_5,x:415.5,y:206.6}).wait(1).to({graphics:mask_graphics_6,x:412.3,y:206.4}).wait(3).to({graphics:mask_graphics_9,x:411.5,y:211.6}).wait(1).to({graphics:mask_graphics_10,x:409.8,y:219.4}).wait(3).to({graphics:mask_graphics_13,x:408.6,y:220.6}).wait(1));

	// Layer 1
	this.instance = new lib._heart1();

	this.instance_1 = new lib._heart2();

	this.instance_2 = new lib._heart3();

	this.instance_3 = new lib._heart4();

	this.instance_4 = new lib._heart5();

	this.instance_5 = new lib._heart6();

	this.instance_6 = new lib._heart7();

	this.instance_7 = new lib._heart8();

	this.instance_8 = new lib._heart9();

	this.instance_9 = new lib._heart10();

	this.instance_10 = new lib._heart11();

	this.instance_11 = new lib._heart12();

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,16,239.6,408.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;