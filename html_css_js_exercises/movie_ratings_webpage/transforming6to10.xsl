<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" />

<xsl:template match="/">

 <xsl:variable name="count" select="'5'"/>

  <div>
   <xsl:attribute name="class">imagesnamesstars</xsl:attribute>
    <div>
     <xsl:attribute name="class">images</xsl:attribute>
     <xsl:attribute name="id">images6to10</xsl:attribute>
    </div>

    <!--images-->

    <xsl:for-each select="(programme-data/programme)[position()&gt;$count]">
     <img>
      <xsl:attribute name="src">
       <xsl:value-of select="image-path"/>
      </xsl:attribute>
      <xsl:attribute name="class">imgbox</xsl:attribute>
     </img>
    </xsl:for-each>

    <!--names-->

   <div>
    <xsl:attribute name="class">names</xsl:attribute>
    <xsl:attribute name="id">names6to10</xsl:attribute>
   </div>

  <xsl:for-each select="(programme-data/programme)[position()&gt;$count]">
   <name><xsl:attribute name="class">namebox</xsl:attribute>
     <xsl:value-of select="name"/>
   </name>
  </xsl:for-each>

    <!--stars-->

   <div>
    <xsl:attribute name="class">stars</xsl:attribute>
    <xsl:attribute name="id">stars6to10</xsl:attribute>
   </div>



  </div> <!--end of imagesnamesstars container-->
</xsl:template>

</xsl:stylesheet>
